import Link from 'next/link'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="Login"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center text-white">
                <img 
                    alt=""
                    className="h-20 w-30"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo_Tiki.png"/>
            </div>
            <h2 className="mt-6 text-center text-5xl font-extrabold text-blue-500">
                {heading}
            </h2>
            <p className="mt-2 text-center text-2xl text-gray-600 mt-5">
            {paragraph} {' '}
            <Link href={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}
