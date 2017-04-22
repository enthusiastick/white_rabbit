# White Rabbit

White Rabbit is a demo of basic `ActionCable` "Hello, World" functionality.
It uses Ruby `2.4.0` and Rails `5.1.0.rc2`.

```bash
$ git clone git@github.com:enthusiastick/white_rabbit.git
$ bundle install
$ rails server
```

And then, in a separate terminal tab:

```bash
$ rails console
Running via Spring preloader in process 71714
Loading development environment (Rails 5.1.0.rc2)
[1] pry(main)> ActionCable.server.broadcast "web_notifications_channel",
  message: "Wake up, Neo..."
[ActionCable] Broadcasting to web_notifications_channel:
  {:message=>"Wake up, Neo..."}
=> 1
```

Successive messages will be displayed on new lines, unless you include the
boolean parameter `clear`:

```bash
[2] pry(main)> ActionCable.server.broadcast "web_notifications_channel",
  message: "Follow the white rabbit.", clear: true
[ActionCable] Broadcasting to web_notifications_channel:
  {:message=>"Follow the white rabbit.", :clear=>true}
=> 1

```
