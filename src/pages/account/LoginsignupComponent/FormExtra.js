export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-6 w-6 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-xl text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-purple-600 text-xl hover:text-purple-500">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}