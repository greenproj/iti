<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.84.0">
    <title>ITI Info - Push Notification</title>

    <link rel="icon" href="assets/images/favicon.png" type="image/x-icon">
    <link href="assets/css/mdb.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

    <style>
        #background {
            background-color: #F26C37;
        }

        .poppins {
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>

<body class="poppins" id="background">
    <div>
        <div style="margin-top: 54px;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-md-8">
                        <form id="notificationForm" class="bg-white rounded-5 shadow-5-strong p-5">
                            <div class="mb-4" align="center">
                                <img src="assets/images/ic_launcher.png" width="80px">
                                <div style="margin-top: 10px;">
                                    <h4>Push Notification</h4>
                                </div>
                            </div>

                            <div id="notificationMsg" class="mb-3 alert alert-success" role="alert"
                                style="display: none;"></div>

                            <div class="mb-4">
                                <select id="provider" class="form-select" name="provider">
                                    <option value="fcm">Firebase Cloud Messaging (FCM)</option>
                                    <option value="onesignal">OneSignal</option>
                                </select>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="title" class="form-control" required />
                                <label class="form-label" for="title">Title</label>
                            </div>

                            <div class="form-outline mb-4">
                                <textarea id="message" class="form-control" rows="2" required></textarea>
                                <label class="form-label" for="message">Message</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="image" class="form-control" />
                                <label class="form-label" for="image">Big Image URL (Optional)</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="number" id="post_id" class="form-control" />
                                <label class="form-label" for="post_id">Post Id (Optional)</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="link" class="form-control" />
                                <label class="form-label" for="link">Link (Optional)</label>
                            </div>

                            <div align="right">
                                <button type="submit" id="submitBtn"
                                    class="btn btn-danger btn-lg btn-rounded">Send Notification</button>
                            </div>

                            <br>
                            <div align="center">
                                <?php echo 'Copyright © 2023
                                <a href="https://codecanyon.net/user/solodroid/portfolio" target="_blank">Bhati Developer</a>'; ?>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="assets/js/mdb.min.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script>

</body>

</html>
