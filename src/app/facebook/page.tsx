'use client'
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/");
    }
    return (
        <div>
            <div>Facebook</div>
            <div>
                <Button variant="danger">Test btn bootstrap</Button>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>

    )
}
export default Facebook;