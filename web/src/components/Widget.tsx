import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

//Estado: variável que sempre que muda de estado, o react muda a interface com o novo valor
//&& só executa a segunda condição se a primeira for verdadeira

export function Widget() {
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    // function toggleWidgetViaibility() {
    //     setIsWidgetOpen(!isWidgetOpen)
    // }

    //{isWidgetOpen && <p>Hello World</p> }

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel><WidgetForm /></Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>


                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    );
}