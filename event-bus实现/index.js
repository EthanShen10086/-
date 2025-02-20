class EventBus {
  constructor() {
    // Store event handlers
    this.events = new Map();
  }

  // Subscribe to an event
  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
  }

  // Unsubscribe from an event
  off(eventName, callback) {
    if (!this.events.has(eventName)) return;
    
    if (!callback) {
      // Remove all handlers for this event
      this.events.delete(eventName);
    } else {
      // Remove specific callback
      const handlers = this.events.get(eventName);
      const index = handlers.indexOf(callback);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
      if (handlers.length === 0) {
        this.events.delete(eventName);
      }
    }
  }

  // Emit an event with data
  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return;
    
    const handlers = this.events.get(eventName);
    handlers.forEach(callback => {
      try {
        callback(...args);
      } catch (error) {
        console.error(`Error in event handler for ${eventName}:`, error);
      }
    });
  }

  // Subscribe to an event only once
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

// Export the EventBus class
export default EventBus;
