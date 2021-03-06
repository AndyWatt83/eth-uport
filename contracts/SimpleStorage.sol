pragma solidity ^0.5.0;

contract SimpleStorage {
    event StorageSet(string _message);

    uint public storedData;

    function get() public view returns (uint) {
        return storedData;
    }

    function set(uint x) public {
        storedData = x;

        emit StorageSet("Data stored successfully!");
    }
}

