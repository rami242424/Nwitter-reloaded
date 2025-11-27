import { auth } from "../firebase"

export default function Profile(){
    const user = auth.currentUser;
    return(
        <Wrapper>
            <AwatarUpload>
                <AvatarImg />
            </AwatarUpload>
            <AvatarInput type="file" accept="image/*" />
            <Name>
                {user?.displayName ? user.displayName : "Anonymous"}
            </Name>
        </Wrapper>
    )
}