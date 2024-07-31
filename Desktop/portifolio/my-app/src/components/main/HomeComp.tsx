import React from "react";
import * as S from './home';


export const HomeComponent: React.FC = () => {
    return (
        <>
        <S.HomeWrapper>
                <S.helloWorld>
                    Hi, I'm Matheus Patricio.<br></br>
                    I project, develop and code Web Aplications
                </S.helloWorld>
            
                 <S.description>
                     I'm a System Analyst and UI/UX Designer focused on Front-End Developing who enjoys turning problems and opportunities into simple interfaces through code.
                </S.description>

                <S.hireButton>Hire Me</S.hireButton>
            
            </S.HomeWrapper>
        </>
    )
}