import { collection, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import type { Unsubscribe } from "firebase/auth";



export interface ITweet {
    id: string;
    photo?: string;
    tweet: string;
    userId: string;
    username: string;
    createAt: number;
}

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

export default function Timeline(){
    const [tweets, setTweet] = useState<ITweet[]>([]);
    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchTweets = async() => {
        const twtsQuery = query(
            collection(db, "tweets"),
            orderBy("createAt","desc"),
            limit(25),
        );
        unsubscribe = await onSnapshot(twtsQuery, (snapshot) => {
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
        fetchTweets();
        return () => {
            unsubscribe && unsubscribe();
        }
    }, []);
    return (
        <Wrapper>
            {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet}/> )}
        </Wrapper>
    );
}