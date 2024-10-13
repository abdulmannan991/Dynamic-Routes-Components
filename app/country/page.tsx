import Link from "next/link";

export default function CountryNames(){
    return (
        <div className="p-12">
     <h1 className="text-center bg-green-300">List of countries</h1>

      <ul className="text-center bg-green-200 p-12">
        <div>
        <li>
        <Link href="/country/Pakistan">Pakistan</Link>

        </li>

       
        </div>

        <li>
            <Link href="/country/India">India</Link>
        </li>

        <li>
          <Link href="/country/Russia">Russia</Link>    
        </li>

        <li>
        <Link href="/country/China">China</Link>
        </li>

        <li>
        <Link href="/country/Japan">Japan</Link>
        </li>
      </ul>
        </div>
    );
        
    
}