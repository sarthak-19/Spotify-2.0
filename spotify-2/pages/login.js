import {getProviders,signIn} from "next-auth/react"
function Login(props) {
    return (
        <div>
        <h1>This Is a login Page</h1>      
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
