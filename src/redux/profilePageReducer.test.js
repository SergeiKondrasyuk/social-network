import profilePageReducer, {addPostAC, deletePostAC} from "./profilePageReducer";
import React from "react";

let state =
    {
        postData: [
            {id: 1, text: 'Hello, world!', likeCount: 15},
            {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
            {id: 3, text: 'This is my own social network!', likeCount: 18},

        ],
        newPost: 'New Post',
    };

it('new post should be added', () => {
    //test data
    let action = addPostAC();
    //action
    let newState = profilePageReducer(state, action);
    //expectation
    expect(newState.postData.length).toBe(4);
});

it('message of new post should be correct', () => {
    //test data
    let action = addPostAC();
    //action
    let newState = profilePageReducer(state, action);
    //expectation
    expect(newState.postData[3].text).toBe('New Post');
});

it('delete post', () => {
    //test data
    let action = deletePostAC();
    //action
    let newState = profilePageReducer(state, action);
    //expectation
    expect(newState.postData.length).toBe('2');
});

