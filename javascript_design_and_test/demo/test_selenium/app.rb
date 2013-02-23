require 'test/unit'
require 'selenium-webdriver'

class TodoAppTest < Test::Unit::TestCase
  def setup
    @driver = Selenium::WebDriver.for :firefox
  end
 
  def teardown
    @driver.quit
  end
 
  def test_submit
    url = "file://#{File.expand_path('..', __FILE__)}/todo/index.html"
    @driver.navigate.to url

    input = @driver.find_element :name => 'text'
    input.send_keys 'foo'
    input.submit

    list = @driver.find_elements :css => '.todoList li'
    assert_equal(list.size, 1)
    assert_equal(list[0].text, 'foo')
  end
end
