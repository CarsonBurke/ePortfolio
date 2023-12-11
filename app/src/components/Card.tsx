import { Component } from 'react'
import './card.css'
import { Stack } from './Stack'
import { Header } from './text/Header'
import { Link } from 'react-router-dom'

interface CardArgs {
    title: string
    imageSRC: string
    imageAlt: string
    to?: string
}

export class Card extends Component<CardArgs> {

    render() {

        return (
            <Link to={this.props.to}>
                <Stack className='cardParent unveil floatUp' direction='column' gap='10px'>
                    <Stack className='secondaryBG' alignHorizontalContent='center' style={{padding: '10px'}} >
                        <Header type='h3'><h3>{this.props.title}</h3></Header>
                    </Stack>
                    <Stack alignHorizontalContent='center'>
                        <img src={this.props.imageSRC} alt='' className='cardImage' />
                    </Stack>
                </Stack>
            </Link>
        )
    }
}