import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header"
import { selectUser } from "../redux/features/userSlice";

function userAccount() {

    const user = useSelector(selectUser);
    console.log(user);




    return (
        <div className="">
            <Header />
            <div className="flex flex-col justify-center items-center">
                <h1>
                {user?.displayName} - Account
                </h1>
                <Image 
                className="rounded-full"
                src={user?.image || ""}
                height={200}
                width={200}
                 />
            </div>
        </div>
    )
}

export default userAccount
