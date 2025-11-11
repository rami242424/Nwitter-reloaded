import styled from "styled-components";

const Form = styled.form``;
const TextArea = styled.textarea``;
const AttachFileBtn = styled.label``;
const AttachFilInput = styled.input``;
const SubmitBtn = styled.input``;

export default function PostTweetForm(){
    return (
        <Form>
            <TextArea placeholder="What is happening?"/>
            <AttachFileBtn htmlFor="file">Add photo</AttachFileBtn>
            <AttachFilInput id="file" accept="image/*"/>
            <SubmitBtn />
        </Form>
);
}