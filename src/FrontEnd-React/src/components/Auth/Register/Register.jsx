import Form from "../Form/Form"

function Register() {
    return (
    <>
        <Form route="/api/user/register/" method="register" />
        <p style={{ width: "fit-content", margin: "0 auto" }}>
        You already have an account?
        <a href="/login"> Sign in!</a>
        </p>
    </>
    )

}

export default Register