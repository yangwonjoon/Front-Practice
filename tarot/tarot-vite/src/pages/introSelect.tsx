import { useNavigate } from "react-router-dom";
import { IntroSelectProps } from "../types/rotationAngles";

export const IntroSelect: React.FC<IntroSelectProps> = ({ card, close }) => {
    const navigate = useNavigate()

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className=" w-4/5 h-4/5 flex">
                <div style={{ backgroundImage: `url(${card})` }} className="w-1/2 h-full bg-cover bg-no-repeat bg-center"></div>
                <div className="h-full w-1/2 bg-white">
                    <h1>카드 이름</h1>
                    <p className="mb-64">카드 설명</p>
                    <button onClick={close}>다시하기</button><br></br>
                    <button onClick={() => navigate('/main')}>메인으로</button>
                </div>
            </div>
        </div>
    );
};
