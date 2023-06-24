<?php
$maxWidth = 800; // Maximum width of the compressed image
$maxHeight = 800; // Maximum height of the compressed image
$quality = 80; // Image quality (0-100)

if ($_FILES['image']['error'] === UPLOAD_ERR_OK) {
  $imageInfo = getimagesize($_FILES['image']['tmp_name']);
  
  if ($imageInfo !== false) {
    $originalWidth = $imageInfo[0];
    $originalHeight = $imageInfo[1];
    $mime = $imageInfo['mime'];
    
    // Calculate new dimensions
    $aspectRatio = $originalWidth / $originalHeight;
    if ($originalWidth > $maxWidth || $originalHeight > $maxHeight) {
      if ($maxWidth / $maxHeight > $aspectRatio) {
        $newWidth = $maxHeight * $aspectRatio;
        $newHeight = $maxHeight;
      } else {
        $newWidth = $maxWidth;
        $newHeight = $maxWidth / $aspectRatio;
      }
    } else {
      $newWidth = $originalWidth;
      $newHeight = $originalHeight;
    }
    
    // Create compressed image
    $compressedImage = imagecreatetruecolor($newWidth, $newHeight);
    $sourceImage = imagecreatefromstring(file_get_contents($_FILES['image']['tmp_name']));
    imagecopyresampled($compressedImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);
    
    // Output compressed image
    header('Content-Type: ' . $mime);
    imagejpeg($compressedImage, null, $quality);
    
    // Save compressed image to file
    $compressedFilename = 'compressed_' . time() . '.jpg';
    imagejpeg($compressedImage, $compressedFilename, $quality);
    
    // Clean up
    imagedestroy($sourceImage);
    imagedestroy($compressedImage);
    
    // Response
    $response = array(
      'success' => true,
      'compressedURL' => $compressedFilename
    );
    echo json_encode($response);
    exit;
  }
}

// Error response
$response = array(
  'success' => false,
  'error' => 'Failed to compress image.'
);
echo json_encode($response);
