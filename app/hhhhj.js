import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>oops....</h1>
            <h2>this page cannot be found</h2>
            <p>go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;