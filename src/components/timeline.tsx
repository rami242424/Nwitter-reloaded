import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { snapshot } from "node:test";



export interface ITweet {
    id: string;
    photo?: string;
    tweet: string;
    userId: string;
    username: string;
    createAt: number;
}

const Wrapper = styled.div``;

export default function Timeline(){
    const [tweets, setTweet] = useState<ITweet[]>([]);
    const fetchTweets = async() => {
        const twtsQuery = query(
            collection(db, "tweets"),
            orderBy("createAt","desc")
        );
        // const spanshot = await getDocs(twtsQuery);
        // const tweets = spanshot.docs.map((doc) => {
        //     const { photo, tweet, userId, username, createAt } = doc.data();
        //     return {
        //         photo,
        //         tweet,
        //         userId,
        //         username,
        //         createAt,
        //         id: doc.id,
        //     }
        // });
        await onSnapshot(twtsQuery, (snapshot) => {
            const tweets = snapshot.docs.map((doc) => {
            const { photo, tweet, userId, username, createAt } = doc.data();
            return {
                photo,
                tweet,
                userId,
                username,
                createAt,
                id: doc.id,
            };
        });
        setTweet(tweets);
    });
    }
    useEffect(() => {
        fetchTweets();
    }, []);
    return (
        <Wrapper>
            {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet}/> )}
        </Wrapper>
    );
}