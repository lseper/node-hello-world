import requests
import time

BASE_URL = "http://localhost:3000"


def test_get_ping_happy_path():
    """Verify GET /ping returns a pong message with status 200"""
    resp = requests.get(f"{BASE_URL}/ping")
    assert resp.status_code == 200
    data = resp.json()
    assert data == {"message": "pong"}


def test_post_increment_first_call():
    """First call to POST /increment should return counter value of 1"""
    resp = requests.post(f"{BASE_URL}/increment")
    assert resp.status_code == 200
    data = resp.json()
    assert data == {"counter": 1}


def test_post_increment_successive_calls():
    """Successive calls to POST /increment should return incrementing counter values"""
    resp = requests.post(f"{BASE_URL}/increment")
    assert resp.status_code == 200
    data = resp.json()
    assert data == {"counter": 2}


def test_post_increment_no_body():
    """POST /increment with no request body should still increment and return counter successfully"""
    resp = requests.post(f"{BASE_URL}/increment")
    assert resp.status_code == 200
    data = resp.json()
    assert "counter" in data
    assert data["counter"] == 3
