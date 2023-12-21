import Link from 'next/link';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';



const getSingleDrink = async (id) => {

    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch drink...')
    }
    const data = await response.json();
    return data;

}



const SingleDrinkPage = async ({ params }) => {
    const data = await getSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink || 'Drink Not Found';
    const imgSrc = data?.drinks[0]?.strDrinkThumb || '@/public/next.svg';    
    
    console.log(title,imgSrc);
    
    
    return (
        <div>
            <Link href="/drinks" className='btn btn-primary mt-8 mb-12'>
                Back to Drinks
            </Link>

            <Image 
  src={imgSrc} // Route of the image file
 
  width={300}  // example width
  height={300} // example height
  className='w-48 h-48 rounded-lg shadow-lg mb-4'
    priority

    alt={title}
/>

    

            <h1 className="text-4xl mb-8">{title}</h1>

        </div>
    ) 

}

export default SingleDrinkPage

