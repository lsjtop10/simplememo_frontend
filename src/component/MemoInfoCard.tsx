/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useState } from 'react';
import { css } from '@emotion/react'
import { ButtonGroup, Card,CardContent, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export interface MemoInfo{
  Id: string,
  Title: string,
  Date: Date
};

const Title = css`
text-overflow: ellipsis;
overflow: hidden;
padding: 2px;
font-size: 2.2rem;
font-weight: bold;
height: (2.2rem * 2 + 5px);
line-height: 2.5rem;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical; 
`

const Title_Editable = css`
overflow-x: hidden;
overflow-y: scroll;
padding: 2px;
font-size: 2.2rem;
line-height: 2.5rem;
font-weight: bold;
padding: 0px;
height: (2.2rem * 2 + 5px);
resize:none;
`
const Date = css`
font-size: 1.1rem;
font-weight: lighter;
text-align: right;
`
const Writer = css`
font-size: 1.1rem;
font-weight: lighter;
text-align: right;
`

export default function MemoInfoCard(Info:MemoInfo){


  const [titleIsEditable, setTitleIsEditable] = useState<boolean>(false)

  return(
  <Card>
    <CardContent> 
      <div>
        <div css={css`display:flex; 
          flex-direction:column; 
          justify-content:space-between; 
          height:150px;`}>
          
          {
            titleIsEditable?
            <>
            <textarea css={Title_Editable} onBlur={() => {setTitleIsEditable(false)}}>{Info.Title}</textarea>
            <div css={css`text-align:right`}><ButtonGroup>
              <IconButton><CheckIcon/></IconButton>
              <IconButton><DeleteIcon/></IconButton>
              </ButtonGroup></div>
            </>:
            <h1 css={Title}  onClick={() => {setTitleIsEditable(true)}}>{Info.Title}</h1>
          }          

          <div css={css`display:flex; flex-direction:column; gap:0.2rem;`}>
              <div css={Date}><b>작성일: </b> {Info.Date.toLocaleDateString('ko')}</div>
          </div>
          </div>
      </div>
      </CardContent>
  </Card>
  )
}