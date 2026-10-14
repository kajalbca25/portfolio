<?php
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$subject = trim($_POST["subject"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    $name === "" ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    $subject === "" ||
    $message === ""
) {
    die("Please enter valid details.");
}

$sql = "INSERT INTO portfolio (name, email, subject, message)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if ($stmt === false) {
    die("SQL Error: " . $conn->error);
}

$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo "Message Saved Successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>