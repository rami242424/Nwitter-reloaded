import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

//로그인한 경우만 보임 & 아닐시 로그인 또는 계정생성 페이지로 리디렉션
export default function ProtectedRoute({children}: {children:React.ReactNode}){
    
    const user = auth.currentUser;
    if(user === null){
        return <Navigate to="login" />;
    }
    return children;
}