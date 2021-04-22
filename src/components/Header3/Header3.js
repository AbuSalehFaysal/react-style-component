import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  color: lightblue;
  border: 1px solid blue;
`;

const Container = styled.div`
    margin: 10px;
    color: purple;
    border: 1px solid pink;
`;

const Header3 = () => {
    return (
        <div>
            <Title>Header 03</Title>
            <Container>
                <h3>Container Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci itaque? Iusto officia porro voluptates commodi quia voluptas sit nemo? Ipsum et repudiandae totam enim sed consequatur illum explicabo fugiat beatae, animi repellat libero nisi, recusandae a repellendus ab, tenetur quaerat expedita autem commodi esse sapiente reiciendis. Odio, tenetur magnam?
                </p>
            </Container>
            <Container>
                <h3>Container Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci itaque? Iusto officia porro voluptates commodi quia voluptas sit nemo? Ipsum et repudiandae totam enim sed consequatur illum explicabo fugiat beatae, animi repellat libero nisi, recusandae a repellendus ab, tenetur quaerat expedita autem commodi esse sapiente reiciendis. Odio, tenetur magnam?
                </p>
            </Container>
            <Container>
                <h3>Container Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci itaque? Iusto officia porro voluptates commodi quia voluptas sit nemo? Ipsum et repudiandae totam enim sed consequatur illum explicabo fugiat beatae, animi repellat libero nisi, recusandae a repellendus ab, tenetur quaerat expedita autem commodi esse sapiente reiciendis. Odio, tenetur magnam?
                </p>
            </Container>
            <Container>
                <h3>Container Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci itaque? Iusto officia porro voluptates commodi quia voluptas sit nemo? Ipsum et repudiandae totam enim sed consequatur illum explicabo fugiat beatae, animi repellat libero nisi, recusandae a repellendus ab, tenetur quaerat expedita autem commodi esse sapiente reiciendis. Odio, tenetur magnam?
                </p>
            </Container>
        </div>
    );
};

export default Header3;