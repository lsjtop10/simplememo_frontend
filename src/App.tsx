/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { styled } from '@mui/system';
import { css } from '@emotion/react'

import {Button, IconButton} from "@mui/material";
import {Card, CardHeader, CardContent} from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material";

import ShareIcon from '@mui/icons-material/Share';
import GoogleIcon from '@mui/icons-material/Google';
import imgUrl from "../app-logo.svg"

import {PC, Mobile} from "./component/ReactiveCP.module"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
})

export default function App() {

  const Header = css`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px -1px 5px black;
`

const Logo__Img = css`
  height: 40px;
  display: inline-block;
`

const Logo__text = css`
  all: unset;
  position: relative;
  top: 4px;
  font-size: 32px;
  font-weight: 700;
  font-family: "roboto";
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
`

const PC_Main = css`
  display: grid;
  grid-template-columns: 450px 1fr;
  padding:5px;
`

const Card__Title = css`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px;
  font-size: 2.2rem;
  font-weight: bold;
  height: (2.2rem * 2 + 5px);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
`

const Card__TitleEdit = css`

`

const Card__Date = css`
  font-size: 1rem;
  font-weight: lighter;
  text-align: right;
`
const Card__Writer = css`
  font-size: 1rem;
  font-weight: lighter;
  text-align: right;
`


class GlobalState{
  isLogined:boolean

  constructor(){
    this.isLogined = false;
  }
}

let [global, setGlobal] = React.useState(new GlobalState)

  return(
    <div className='App'>
      <ThemeProvider theme={theme}>
        <header css={Header}>
              <section>
                  <img src={imgUrl} css={Logo__Img} alt="로고 이미지"/>
                  <PC>
                    <h1 css={Logo__text}>
                        Simple Memo
                    </h1>
                  </PC>
              </section>
              <div style={{display:'inline'}}>
                  <span className="sr-only">공유</span>
                  <IconButton style={{marginRight:"6px"}}>
                      <ShareIcon></ShareIcon>
                  </IconButton>
                  {
                    global.isLogined? 
                      <span>profile</span>:
                      <span>
                        <span className="sr-only">구글로 로그인</span>
                        <Button variant="contained" startIcon={<GoogleIcon/>}
                          onClick={
                            () => {
                              setGlobal((prev) => {
                                let newGlobal:GlobalState = {...prev};
                                newGlobal.isLogined = true;
                                return newGlobal;
                              });
                            }
                          }>로그인</Button>
                      </span>
                  }
              </div>
        </header>

        <main >
          <PC>
            <div css={PC_Main}>
              <Card>
                <CardContent> 
                  <div>
                    <div css={css`display:flex; 
                      flex-direction:column; 
                      justify-content:space-between; 
                      height:150px;`}>
                      <h1 css={Card__Title}>이것은 제목입니다. 어쩔티비 저쩔티비 꼴받쥬 쿠크르핑뽕ㅋㅋㅋㅋㅋㅋ</h1>
                      <textarea css={Card__TitleEdit} ></textarea>
                      <div css={css`display:flex; flex-direction:column; gap:0.2rem;`}>
                        <div css={Card__Date}>2023년 3월 1일</div>
                        <div css={Card__Writer}> 김아무개</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </PC>
        </main>
      </ThemeProvider>
    </div>
  ) 
}