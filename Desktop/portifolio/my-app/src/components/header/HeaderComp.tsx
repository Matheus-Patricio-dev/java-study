import React from "react";
import * as S from "./header";
import logo from './img/logo.png'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";



export const HeaderComponent: React.FC = () => {
    return (
        <>
        <S.headerWrapper>

            <S.headerImg src={logo}></S.headerImg>
            <S.HeaderBox>
                <S.HeaderContactBox href="www.linkedin.com/in/matheuspatriciof"><CiLinkedin/></S.HeaderContactBox>
                <S.HeaderContactBox href="https://github.com/Matheus-Patricio"><FaGithub/></S.HeaderContactBox>
                <S.HeaderContactBox href="contato.matheuspatricio@gmail.com"><CiMail/></S.HeaderContactBox>
                <S.HeaderContactBox href="https://www.instagram.com/opatriciomt?igsh=OTJoYXF0czUwejV4"><FaInstagram/></S.HeaderContactBox>
            </S.HeaderBox>

            <S.headerButtonWrapper>
                
                <S.headerAncor href="./">Home</S.headerAncor>
                <S.headerAncor href="./">Sobre mim</S.headerAncor>
                <S.headerAncor href="./">Projeto</S.headerAncor>
                <S.headerAncor href="./">Contato</S.headerAncor>

            </S.headerButtonWrapper>
        </S.headerWrapper>
        </>
    )
}