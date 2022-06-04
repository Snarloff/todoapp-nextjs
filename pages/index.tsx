import type { GetServerSideProps } from 'next'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { getAllTodos, Todo } from 'lib/db'

interface PostProps {
  todos: Todo[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const todos: Array<any> = await getAllTodos()
  
  return {
    props: {
      todos
    }
  }
}

const Home = ({ todos }: PostProps) => {

  const [description, setDescription] = useState('')

  const router = useRouter()
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetch('/api/todo', { method: 'POST', body: JSON.stringify(description) })
    refreshData()
  }

  const handleDelete = async (id: number) => {
    await fetch('/api/todo', { method: 'DELETE', body: JSON.stringify(id) })
    refreshData()
  }

  return (
    <div className="flex-col bg-gray-800 h-screen w-screen flex items-center justify-center font-sans ">

      <div className="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
        <div className="mb-4">
          <h1 className="text-white">Todo List</h1>
          <form className="flex mt-4" onSubmit={handleSubmit}>
            <input
              className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black"
              placeholder="Add Todo"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
            <button
              type="submit"
              className="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                enable-background="new 0 0 20 20"
                className="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                      C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
          </form>
        </div>

        <div>
          {todos?.map((item, index) => (
            <div className="flex mb-4 items-center" key={index}>
              <p className="w-full text-white">
                <strong>{index + 1}.</strong> {item.description}
              </p>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="uppercase p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 "
              >
                <svg
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                  style={{transform: "rotate(360deg)"}}
                >
                  <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                  <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                  <path
                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                    fill="currentColor"
                  ></path>
                  <path d="M12 2h8v2h-8z" fill="currentColor"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-800 flex items-center justify-center font-sans md:max-w-2xl">
        <div
          className="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
        >
          <div className="mb-4">
            <h1 className="text-white">Completed</h1>
            <div className="flex mt-4 text-white">
              Completed todo here ...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
