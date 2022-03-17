import { getUsers } from "../services/api"
import UsersList from "../components/UsersList"
import Layout from "../components/Layout"

export default function index({ users }) {
    return (
        <Layout>
            <UsersList users={users} />
        </Layout>
    )
}

export async function getStaticProps() {
    const users = await getUsers()

    return {
        props: {
            users
        }
    }
}