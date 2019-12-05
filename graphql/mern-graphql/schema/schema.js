const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const CarsArray = [
  { id: "1", name: "S-Class", model: "2019", company: "Mercedes" },
  { id: "2", name: "Continental GT", model: "2019", company: "Bentley" },
  { id: "3", name: "Phantom", model: "2019", company: "Rolls-Royce" },
  { id: "4", name: "Panamera", model: "2019", company: "Porsche" },
  { id: "5", name: "A8", model: "2019", company: "Audi" },
  { id: "6", name: "I-Pace", model: "2019", company: "Jaguar" }
];

var OwnersArray = [
  { id: "1", name: "Vinod Chauhan", age: 27, gender: "male" },
  { id: "2", name: "John Dow", age: 46, gender: "male" },
  { id: "3", name: "Kristen", age: 30, gender: "female" },
  { id: "4", name: "Paris", age: 44, gender: "female" },
  { id: "5", name: "Sylvestor", age: 26, gender: "male" }
];

// Define fields
const CarType = new GraphQLObjectType({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    model: { type: GraphQLInt },
    company: { type: GraphQLString }
  })
});

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString }
  })
});

// Define query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Query for frontend
    car: {
      type: CarType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return _.find(CarsArray, {
          id: args.id
        });
      }
    },

    owner: {
      type: OwnerType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return _.find(OwnersArray, {
          id: args.id
        });
      }
    }
  }
});

// Export schema with RootQuery for middleware
module.exports = new GraphQLSchema({
  query: RootQuery
});
