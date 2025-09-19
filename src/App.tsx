import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {

    return (
        //React fragment - quando você não quer colocar um elemento Pai
        <>
            <Heading>
                Propriedade
                
                <button>
                    <TimerIcon />
                </button>
            </Heading>             
            
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
            aliquam ad ex, in cum atque culpa veniam ut sunt doloribus et? Ducimus quisquam 
            laboriosam dicta cupiditate, quam esse explicabo saepe.</p>
        </>
    );
}