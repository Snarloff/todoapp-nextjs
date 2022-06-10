import { Fragment } from 'react'
import AddTodo from 'components/AddTodo'
import useSWR from 'swr'
import DeleteTodo from 'components/DeleteTodo'
import Head from 'next/head'

const Home = () => {

  const { data: todos, error } = useSWR('/api/todo')

  return (

    <Fragment>

      <Head>
        <title>Todo App</title>
      </Head>

      <div className="flex-col bg-gray-800 h-screen w-screen flex items-center justify-center font-sans ">
        <div className="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
          <div className="mb-4">
            <h1 className="text-white">Todo List</h1>
            <AddTodo />
          </div>
          <DeleteTodo todos={todos}/>
        </div>
      </div>
    </Fragment>

  )
}


export default Home
