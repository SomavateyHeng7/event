

export default function SignUp() {
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="* * * * * *"></input>
                </div>
                <button className="bg-slate-600 font-bold text-white py-3 px-6 w-fit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
