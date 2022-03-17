import Layout from '../../components/Layout'
import TodosLayout from '../../components/TodosLayout'
import { getTodosFromUser, getUsers } from '../../services/api'

export default function index({ todos, user }) {
    return (
        <Layout>
            <TodosLayout todos={todos} user={user} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const userId = context.query.userId
    const todos = await getTodosFromUser(userId)
    const user = await getUsers(userId)

    return {
        props: {
            todos,
            user: user[0]
        }
    }
}