
import { useGlobalState } from '../GlobalStateContext';
export default function Switch() {
    const { state, setState } = useGlobalState();
    const handleClick = () => {
        setState((prevState) => ({
            ...prevState,
            isSelect: !prevState.isSelect,
        }));
    };
    return (
        <div>
            <div onClick={handleClick} className={`h-[2.9rem] w-[5rem] rounded-full flex items-center transition-all duration-300 ${state.isSelect ? "bg-[#64FF64]": "bg-[#D9D9D9]"}`}>
                <span className={`h-[2.7rem] w-[2.7rem] rounded-full  transition-all duration-300 ${state.isSelect ? 'ml-[2.3rem] bg-[#222626]' : 'ml-0 bg-[#432818]'}`}></span>
            </div>
        </div>
    );
}