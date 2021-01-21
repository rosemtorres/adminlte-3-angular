<?php

header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');
$db_connect = mysqli_connect('localhost', 'root', '','schiavello_assets');
$data = json_decode(file_get_contents('php://input'), true);

if (isset($_GET['service'])) {
	if ($_GET['service'] == "get") {
		return getServices();
	} elseif($_GET['service'] == "create") {
		return createService();
	} elseif( $_GET['service'] == "getone") {
		return getOneService();
	}
}

if (isset($_GET['user'])) {
	if ($_GET['user'] == "get") {
		return getUsers();
	} elseif($_GET['user'] == "create") {
		return createUser();
	} elseif( $_GET['user'] == "getone") {
		return getOneUser();
	} elseif( $_GET['user'] == "edit") {
		return editUser();
	}
}

function getServices() {
	global $db_connect;
	$query = "SELECT * FROM `services`";
	$result = mysqli_query($db_connect, $query) or die(mysqli_error($db_connect));
	$flag = FALSE;
	while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
		$services[$row['service_id']]['service_id'] = $row['service_id'];
		$services[$row['service_id']]['service'] = $row['service'];
		$services[$row['service_id']]['capex_opex'] = $row['capex_opex'];
		$services[$row['service_id']]['license_rented_owned'] = $row['license_rented_owned'];
		$services[$row['service_id']]['depreciation_rate'] = $row['depreciation_rate'];
		$services[$row['service_id']]['cost_per_license'] = $row['cost_per_license'];
		$services[$row['service_id']]['owned_by_group_or_individual_company'] = $row['owned_by_group_or_individual_company'];
		$services[$row['service_id']]['maintenace_status'] = $row['maintenace_status'];
		$services[$row['service_id']]['payg'] = $row['payg'];
		$services[$row['service_id']]['payment_freq'] = $row['payment_freq'];
		$services[$row['service_id']]['contract_length'] = $row['contract_length'];
		$services[$row['service_id']]['expiry_date'] = $row['expiry_date'];
		$services[$row['service_id']]['total_contract_value'] = $row['total_contract_value'];
		$services[$row['service_id']]['volume_of_users'] = $row['volume_of_users'];
		$services[$row['service_id']]['per_license_cost_per_year'] = $row['per_license_cost_per_year'];
		$services[$row['service_id']]['total_volume_in_of_licenses'] = $row['total_volume_in_of_licenses'];
		$services[$row['service_id']]['available_licenses'] = $row['available_licenses'];
		$services[$row['service_id']]['notes'] = $row['notes'];
	}
	echo json_encode(($services));
}

function createService() {
	global $db_connect;
	global $data;

	if (empty($data)) return false;

	$service = $data['service'];
	$capex_opex = $data['capex_opex'];
	$license_rented_owned = $data['license_rented_owned'];
	$depreciation_rate = $data['depreciation_rate'];
	$cost_per_license = $data['cost_per_license'];
	$owned_by_group_or_individual_company = $data['owned_by_group_or_individual_company'];
	$maintenace_status = $data['maintenace_status'];
	$payg = $data['payg'];
	$payment_freq = $data['payment_freq'];
	$contract_length = $data['contract_length'];
	$expiry_date = $data['expiry_date'];
	$total_contract_value = $data['total_contract_value'];
	$volume_of_users = $data['volume_of_users'];
	$per_license_cost_per_year = $data['per_license_cost_per_year'];
	$total_volume_in_of_licenses = $data['total_volume_in_of_licenses'];
	$available_licenses = $data['available_licenses'];
	$notes = $data['notes'];
	$query = "INSERT INTO services (`service`,`capex_opex`,`license_rented_owned`,`depreciation_rate`,`cost_per_license`,`owned_by_group_or_individual_company`,`maintenace_status`,`payg`,`payment_freq`,`contract_length`,`expiry_date`,`total_contract_value`,`volume_of_users`,`per_license_cost_per_year`,`total_volume_in_of_licenses`,`available_licenses`,`notes`)
			VALUES('$service','$capex_opex','$license_rented_owned','$depreciation_rate','$cost_per_license','$owned_by_group_or_individual_company','$maintenace_status','$payg','$payment_freq','$contract_length','$expiry_date','$total_contract_value','$volume_of_users','$per_license_cost_per_year','$total_volume_in_of_licenses','$available_licenses','$notes')";
	$query_result = $db_connect->query($query);
	echo json_encode($query_result);
}

function getOneService() {
	global $db_connect;
	global $data;
	if (empty($data)) return false;
	
	$query = "SELECT * FROM `services` WHERE service_id = $data";
	$result = mysqli_query($db_connect, $query) or die(mysqli_error($db_connect));
	$flag = FALSE;
	while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
		$services[$row['service_id']]['service_id'] = $row['service_id'];
		$services[$row['service_id']]['service'] = $row['service'];
		$services[$row['service_id']]['capex_opex'] = $row['capex_opex'];
		$services[$row['service_id']]['license_rented_owned'] = $row['license_rented_owned'];
		$services[$row['service_id']]['depreciation_rate'] = $row['depreciation_rate'];
		$services[$row['service_id']]['cost_per_license'] = $row['cost_per_license'];
		$services[$row['service_id']]['owned_by_group_or_individual_company'] = $row['owned_by_group_or_individual_company'];
		$services[$row['service_id']]['maintenace_status'] = $row['maintenace_status'];
		$services[$row['service_id']]['payg'] = $row['payg'];
		$services[$row['service_id']]['payment_freq'] = $row['payment_freq'];
		$services[$row['service_id']]['contract_length'] = $row['contract_length'];
		$services[$row['service_id']]['expiry_date'] = $row['expiry_date'];
		$services[$row['service_id']]['total_contract_value'] = $row['total_contract_value'];
		$services[$row['service_id']]['volume_of_users'] = $row['volume_of_users'];
		$services[$row['service_id']]['per_license_cost_per_year'] = $row['per_license_cost_per_year'];
		$services[$row['service_id']]['total_volume_in_of_licenses'] = $row['total_volume_in_of_licenses'];
		$services[$row['service_id']]['available_licenses'] = $row['available_licenses'];
		$services[$row['service_id']]['notes'] = $row['notes'];
		$services[$row['service_id']]['date_created'] = $row['date_created'];
	}
	echo json_encode($services);
}

/**Users**/
if ($_GET['user'] == "get") {
	return getUsers();
}

function getUsers() {
	global $db_connect;
	$query = "SELECT * from users";
	$result = mysqli_query($db_connect, $query) or die(mysqli_error($db_connect));
	while($row = mysqli_fetch_array($result)) {
		$users[$row['user_id']]['user_id'] = $row['user_id'];
		$users[$row['user_id']]['sam_account_name'] = $row['sam_account_name'];
		$users[$row['user_id']]['computer_name_from_ad'] = $row['computer_name_from_ad'];
		$users[$row['user_id']]['company'] = $row['company'];
		$users[$row['user_id']]['status'] = $row['status'];
		$users[$row['user_id']]['first_name'] = $row['first_name'];
		$users[$row['user_id']]['last_name'] = $row['last_name'];
		$users[$row['user_id']]['email'] = $row['email'];
		$users[$row['user_id']]['manu'] = $row['manu'];
		$users[$row['user_id']]['model'] = $row['model'];
		$users[$row['user_id']]['type'] = $row['type'];
		$users[$row['user_id']]['os'] = $row['os'];
		$users[$row['user_id']]['memory'] = $row['memory'];
		$users[$row['user_id']]['processor'] = $row['processor'];
		$users[$row['user_id']]['purchase_value'] = $row['purchase_value'];
		$users[$row['user_id']]['allowed_asset'] = $row['allowed_asset'];
		$users[$row['user_id']]['date_created'] = $row['date_created'];
	}
	echo json_encode($users);
}

function getOneUser() {
	global $db_connect;
	global $data;
	if (empty($data)) return false;
	
	$query = "SELECT * FROM `users` WHERE user_id = $data";
	$result = mysqli_query($db_connect, $query) or die(mysqli_error($db_connect));
	$flag = FALSE;
	while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
		$users[$row['user_id']]['user_id'] = $row['user_id'];
		$users[$row['user_id']]['sam_account_name'] = $row['sam_account_name'];
		$users[$row['user_id']]['computer_name_from_ad'] = $row['computer_name_from_ad'];
		$users[$row['user_id']]['company'] = $row['company'];
		$users[$row['user_id']]['status'] = $row['status'];
		$users[$row['user_id']]['first_name'] = $row['first_name'];
		$users[$row['user_id']]['last_name'] = $row['last_name'];
		$users[$row['user_id']]['email'] = $row['email'];
		$users[$row['user_id']]['manu'] = $row['manu'];
		$users[$row['user_id']]['model'] = $row['model'];
		$users[$row['user_id']]['type'] = $row['type'];
		$users[$row['user_id']]['os'] = $row['os'];
		$users[$row['user_id']]['memory'] = $row['memory'];
		$users[$row['user_id']]['processor'] = $row['processor'];
		$users[$row['user_id']]['purchase_value'] = $row['purchase_value'];
		$users[$row['user_id']]['allowed_asset'] = $row['allowed_asset'];
		$users[$row['user_id']]['date_created'] = $row['date_created'];
	}
	echo json_encode($users);
}


function createUser() {
	global $db_connect;
	global $data;

	if (empty($data)) return false;
	$sam_account_name = $data['sam_account_name'];
	$computer_name_from_ad = $data['computer_name_from_ad'];
	$company = $data['company'];
	$status = $data['status'];
	$first_name = $data['first_name'];
	$last_name = $data['last_name'];
	$email = $data['email'];
	$manu = $data['manu'];
	$model = $data['model'];
	$type = $data['type'];
	$os = $data['os'];
	$memory = $data['memory'];
	$processor = $data['processor'];
	$purchase_value = $data['purchase_value'];
	$allowed_asset =  $data['allowed_asset'];

	$query = "INSERT INTO users (`sam_account_name`,`computer_name_from_ad`,`company`,`status`,`first_name`,`last_name`,`email`,`manu`,`model`,`type`,`os`,`memory`,`processor`,`purchase_value`,`allowed_asset`)
			VALUES('$sam_account_name','$computer_name_from_ad','$company','$status','$first_name','$last_name','$email','$manu','$model','$type','$os','$memory','$processor','$purchase_value',\"$allowed_asset\")";
	$query_result = $db_connect->query($query);
	echo json_encode($query_result);
}

function editUser() {
	global $db_connect;
	global $data;

	if (empty($data)) return false;
	$user_id = $data['user_id'];
	$sam_account_name = $data['sam_account_name'];
	$computer_name_from_ad = $data['computer_name_from_ad'];
	$company = $data['company'];
	$status = $data['status'];
	$first_name = $data['first_name'];
	$last_name = $data['last_name'];
	$email = $data['email'];
	$manu = $data['manu'];
	$model = $data['model'];
	$type = $data['type'];
	$os = $data['os'];
	$memory = $data['memory'];
	$processor = $data['processor'];
	$purchase_value = $data['purchase_value'];
	$allowed_asset = $data['allowed_asset'];

	$query = "UPDATE users SET
	`sam_account_name` = '$sam_account_name',
	`computer_name_from_ad` = '$computer_name_from_ad',
	`company` = '$company',
	`status` = '$status',
	`first_name` = '$first_name',
	`last_name` = '$last_name',
	`email` = '$email',
	`manu` = '$manu',
	`model` = '$model',
	`type` = '$type',
	`os` = '$os',
	`memory` = '$memory',
	`processor` = '$processor',
	`purchase_value` = '$purchase_value',
	`allowed_asset` = \"$allowed_asset\"
	WHERE `user_id` = '$user_id'";
	$query_result = $db_connect->query($query);
	echo json_encode($query_result);
}