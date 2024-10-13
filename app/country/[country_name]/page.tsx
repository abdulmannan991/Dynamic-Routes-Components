export default function Country({ params }: { params: { country_name: string } }) {


    if (!Country) {
        return <div>Country not found!</div>;
    }

    return (
        <div >
            <h1>Country Name: {params.country_name}</h1>
           
        </div>
    );
}
