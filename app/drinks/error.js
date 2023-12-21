'use client';

const error = () => {
    return (
        <div>
            <h1 className="text-5xl mb-8 font-bold">
                {error.message}
                 There was an error....</h1>
        </div>
    )
}

export default error;