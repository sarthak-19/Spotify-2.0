import {getProviders,signIn} from "next-auth/react"
function Login({providers}) {
    return (
        <div className="flex flex-col bg-black min-h-screen items-center justify-center w-full">
        {/* <h1>This Is a login Page</h1>       */}
        <img className="w-52 mb-5" src="https://links.papareact.com/9xl"></img>

        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button className="bg-[#18D860] text-white p-5 rounded-full"
                onClick={()=> signIn(provider.clientId,{callbackUrl:"/"})}>Login With {provider.name}</button>
            </div>
        ))}
        </div>
    );
}

export default Login;

export async function getServerSideProps()
{
    const providers = await getProviders();

    return{
        props:{providers}
    }
}
