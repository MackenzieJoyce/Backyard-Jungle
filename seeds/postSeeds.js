const {Post} = require("../models");

const userPost = [
    {
        title:"My Orchids Bloomed!",
        body: "Today, my orchids that I have been carefully tending to, finally bloomed. They are worth every second of waiting.",
        type: "Outdoor Gardening",
        user_id: 1
    },
    {
        title:"Jasmine in the Air",
        body: "In order to get your jasmine flowers to  have a strong smell, spritz them with some water to simulate morning dew. They will stay fragrant through the day",
        type: "Outdoor Gardening",
        user_id: 2
    },
    {
        title:"Go to Nana's Nursery Today!",
        body: "If you live in Orlando, run to Nana's Nursery this week. They are selling mid-to full grown palm trees for less than $100. These gorgeous trees bring that tropical feel to your home",
        type:"Large-Scale Trees",
        user_id: 3
    },
    
    {
        title:"Early blooms?",
        body: "I've only had my orange trees for 3 years but this year they seem to be blooming particularly early...Anyone else see that?",
        type:"Large-Scale Trees",
        user_id: 3
    },
    
    {
        title:"HELP - my hibiscus have spots!!! ",
        body: "There are grey spots on the leaves and stems of my hibiscus! They look like raised beads. I thought I saw something on the tree yesterday but I figured it was the light catching my eyes...",
        type:"Large-Scale Trees",
        user_id: 3
    }
]

const seedPost = () => Post.bulkCreate(userPost);
module.exports = seedPost;