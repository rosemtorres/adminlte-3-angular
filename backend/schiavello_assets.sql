-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 01:24 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schiavello_assets`
--

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service` varchar(100) DEFAULT NULL,
  `capex_opex` varchar(100) DEFAULT NULL,
  `license_rented_owned` varchar(100) DEFAULT NULL,
  `depreciation_rate` varchar(100) DEFAULT NULL,
  `cost_per_license` varchar(100) DEFAULT NULL,
  `owned_by_group_or_individual_company` varchar(100) DEFAULT NULL,
  `maintenace_status` varchar(100) DEFAULT NULL,
  `payg` varchar(100) DEFAULT NULL,
  `payment_freq` varchar(100) DEFAULT NULL,
  `contract_length` varchar(100) DEFAULT NULL,
  `expiry_date` varchar(100) DEFAULT NULL,
  `total_contract_value` varchar(100) DEFAULT NULL,
  `volume_of_users` varchar(100) DEFAULT NULL,
  `per_license_cost_per_year` varchar(100) DEFAULT NULL,
  `total_volume_in_of_licenses` varchar(100) DEFAULT NULL,
  `available_licenses` varchar(100) DEFAULT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service`, `capex_opex`, `license_rented_owned`, `depreciation_rate`, `cost_per_license`, `owned_by_group_or_individual_company`, `maintenace_status`, `payg`, `payment_freq`, `contract_length`, `expiry_date`, `total_contract_value`, `volume_of_users`, `per_license_cost_per_year`, `total_volume_in_of_licenses`, `available_licenses`, `notes`, `date_created`) VALUES
(1, 'Microsoft Office 365 - en-us', 'Opex', 'Rented', '', '', ' Individual Company', ' Active', 'Yes', '1', '12', '', '', '1', '$ -   ', '1', '0', '', '2021-01-15 05:30:00'),
(2, 'MS CORE CAL', 'Opex', 'Owned', '', '', 'Group', 'Active', 'Yes', '12', '36', '2021', '$ 300,000 ', '630', '$ 158.73 ', '617', '-13', '', '2021-01-15 06:30:00'),
(22, 'ANTIVIRUS', 'opex', 'owned', '40', '25', 'individual', 'active', 'no', '2', '52', '2025', '366', '35', '265', '265', '12', 'This is a note', '2021-01-15 12:13:12'),
(23, 'Microsoft Office Word MUI (English) 2007', 'opex', 'owned', '40', '25', 'individual', 'active', 'no', '2', '52', '2025', '366', '35', '265', '265', '12', 'This is a note', '2021-01-15 12:16:01'),
(24, 'test', 'opex', 'rented', '23', '4', 'group', 'active', 'yes', '22', '24', '133', '1', '1', '1', '1', '2', 'this is a note', '2021-01-21 06:43:23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `sam_account_name` varchar(100) DEFAULT NULL,
  `computer_name_from_ad` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `manu` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `os` varchar(100) DEFAULT NULL,
  `memory` varchar(100) DEFAULT NULL,
  `processor` varchar(100) DEFAULT NULL,
  `purchase_value` varchar(100) DEFAULT NULL,
  `allowed_asset` longtext DEFAULT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `sam_account_name`, `computer_name_from_ad`, `company`, `status`, `first_name`, `last_name`, `email`, `manu`, `model`, `type`, `os`, `memory`, `processor`, `purchase_value`, `allowed_asset`, `date_created`) VALUES
(1, 'aalcoriza', 'D0004146', 'Heritage Glass Products (Aust) Pty Ltd', 'In Use', 'Abigael', 'Alcoriza', 'aalcoriza@heritageglass.com.au', 'Hewlett-Packard', 'HP Z640 Workstation', 'Mini Tower', 'Microsoft Windows 10 Pro', '32768', 'Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz [8 core(s) x86_64]', '', '', '2021-01-15 14:22:09'),
(2, 'awilliams', 'L0004025', 'Heritage Glass Products (Aust) Pty Ltd', 'In Use', 'Alan', 'Williams', 'awilliams@heritageglass.com.au', 'LENOVO', '20F90012AU', 'Notebook', 'Microsoft Windows 10 Pro', '8192', 'Intel(R) Core(TM) i7-6600U CPU @ 2.60GHz [2 core(s) x86_64]', '', '', '2021-01-15 14:22:09'),
(25, 'aalcoriza', 'D0004146', 'Heritage Glass Products (Aust) Pty Ltd', 'in_use', 'Abigael', 'Alcoriza', 'aalcoriza@heritageglass.com.au', 'Hewlett-Packard', 'HP Z640 Workstation', 'Mini Tower', 'Microsoft Windows 10 Pro', '32768', 'Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz [8 core(s) x86_64]', 'None', '0: \'Microsoft Office 365 - en-us\',1: \'MS CORE CAL\',2: \'ANTIVIRUS\',3: \'Microsoft Office Word MUI (English) 2007\'', '2021-01-20 14:10:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
