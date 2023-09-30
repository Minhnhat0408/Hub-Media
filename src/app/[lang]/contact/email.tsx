import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
export default function Email({email,name,phone,services,message} : {email:string,name:string,phone:string,services:string,message?:string}) {

    return (
        <Html>
            <Head/>
            <Preview>{`Email từ khách hàng ${name}` }</Preview>
                <Body style={{backgroundColor:"#d9658c",color:"black"}}>
                    <Container>
                        <Section  style={{
                            backgroundColor: '#fff',
                            marginTop:'40px',
                            marginBottom:'40px',
                            paddingTop:'16px',
                            paddingBottom:'16px',
                            paddingLeft:'40px',
                            paddingRight:'40px',
                            borderRadius:'10px',
                        }}>
                            <Heading  >Yêu cầu của khách hàng</Heading>
                            <Hr/>
                            <Text>{`Tên khách hàng : ${name}`}</Text>
                            <Text>{`Email : ${email}`}</Text>
                            <Text>{`Số điện thoại : ${phone}`}</Text>
                            <Text>{`Dịch vụ : ${services}`}</Text>
                            <Text>{`Lời nhắn : ${message}`}</Text>
                        </Section>
                    </Container>
                </Body>
        </Html>
    )
}