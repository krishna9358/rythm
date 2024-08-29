"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar()    {
    const session = useSession();
    return <div>
        <div className="flex justify-between">
            <div>
                    SAAS-Music
            </div>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-green-400" onClick={ () => signOut() }>SignOut</button>}
                {!session.data?.user && <button className="m-2 p-2 bg-green-400" onClick={ () => signIn() }>SignIn</button>}
            </div>
        </div>
    </div>
}
