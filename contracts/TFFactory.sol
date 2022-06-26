//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./TradeFarmingAVAX.sol";
import "hardhat/console.sol";

contract TFFactory {
    event NewContractCreated(address indexed from, address contractAddress);

    function newFarm(
        address _routerAddress,
        address _tokenAddress,
        address _rewardAddress,
        uint256 _previousVolume,
        uint256 _previousDay,
        uint256 _totalDays,
        uint256 _upLimit,
        uint256 _downLimit
    ) public returns (address) {
        TradeFarmingAVAX newSwapFarm = new TradeFarmingAVAX(
            _routerAddress,
            _tokenAddress,
            _rewardAddress,
            _previousVolume,
            _previousDay,
            _totalDays,
            _upLimit,
            _downLimit
        );
        console.log("first owner %s", newSwapFarm.owner());
        newSwapFarm.transferOwnership(msg.sender);
        console.log(
            "deployed new farm at %s with owner of %s",
            address(newSwapFarm),
            newSwapFarm.owner()
        );
        address newContractAddress = address(newSwapFarm);
        emit NewContractCreated(msg.sender, newContractAddress);
        return newContractAddress;
    }
}
