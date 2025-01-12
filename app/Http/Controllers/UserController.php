<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Display a listing of users.
     */
    public function index()
    {
        return response()->json($this->userService->getAllUsers());
    }

    /**
     * Show a specific user.
     */
    public function show($id)
    {
        $user = $this->userService->getUserById($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    /**
     * Store a newly created user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = $this->userService->createUser($validated);
        return response()->json($user, 201);
    }

    /**
     * Update the specified user.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes|string|min:8',
        ]);

        $user = $this->userService->updateUser($id, $validated);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    /**
     * Remove the specified user.
     */
    public function destroy($id)
    {
        $success = $this->userService->deleteUser($id);
        if (!$success) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json(['message' => 'User deleted successfully']);
    }
}
