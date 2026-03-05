export interface LikeSongResponse
{
    id : number
};

export async function POST(req : Request, { params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_URL}/songs/${id}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

export async function DELETE(req : Request, { params } : { params: Promise<{ id: string }> } ) {
    const { id } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_URL}/songs/${id}/likes`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}