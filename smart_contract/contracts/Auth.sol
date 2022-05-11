// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Auth {
    struct User {
        uint256 id;
        address userAddress;
        string username;
        string password;
        string userType;
        bool isUserLoggedIn;
    }

    mapping(address => User) user;

    function register(
        address _address,
        string memory _username,
        string memory _password,
        string memory _userType
    ) public returns (bool) {
        require(user[_address].userAddress != msg.sender);
        user[_address].userAddress = _address;
        user[_address].username = _username;
        user[_address].password = _password;
        user[_address].userType = _userType;
        return true;
    }

    function login(address _address, string memory _password)
        public
        returns (bool)
    {
        if (
            keccak256(abi.encodePacked(user[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            user[_address].isUserLoggedIn = true;
            return user[_address].isUserLoggedIn;
        } else {
            return false;
        }
    }

    function checkIsUserLogged(address _address) public view returns (bool) {
        return user[_address].isUserLoggedIn;
    }

    function logout(address _address) public {
        user[_address].isUserLoggedIn = false;
    }
}
