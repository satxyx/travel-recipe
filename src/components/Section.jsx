import styled from 'styled-components'
import img from '../pages/10.png'

function Section() {

    const Container = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // background-image: url(${img})

    `
    const Div = styled.div `
        width: 32%;
        padding-bottom: 18%;
        margin-bottom: 2%;
        color:white;
        padding-around:30px;
        padding-bottom:60px;
        padding:30px;
    `

    return (
        
        <Container>
            <Div>
                <h1>Mindset.</h1>
                <p>
                Nulla eget dapibus risus. Pellentesque ut mi at enim condimentum tincidunt nec in elit. Integer ultrices diam a malesuada cursus. Maecenas id vulputate leo. Proin auctor egestas porttitor. Phasellus non arcu varius, rutrum erat sed, semper dui. 
                </p>
            </Div>
            <Div>
                <h1>Lifestyle.</h1>
                <p>
                Nulla eget dapibus risus. Pellentesque ut mi at enim condimentum tincidunt nec in elit. Integer ultrices diam a malesuada cursus. Maecenas id vulputate leo. Proin auctor egestas porttitor. Phasellus non arcu varius, rutrum erat sed, semper dui. Aenean est dolor, 
                </p>
            </Div>
            <Div>
                <h1>Motivator.</h1>
                <p>
                Nulla eget dapibus risus. Pellentesque ut mi at enim condimentum tincidunt nec in elit. Integer ultrices diam a malesuada cursus. Maecenas id vulputate leo. Proin auctor egestas porttitor. Phasellus non arcu varius, rutrum erat sed, semper dui. Aenean est dolor, 

                </p>
            </Div>
        </Container>

    )
}

export default Section